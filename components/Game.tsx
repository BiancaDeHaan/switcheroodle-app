import React, { useState, useEffect, useRef } from 'react';
import { GoalWord } from './game/GoalWord';
import { CurrentWord } from './game/CurrentWord';
import { PreviousGuesses } from './game/PreviousGuesses';
import { Word } from './game/Word';
import { toast, ToastContainer } from "react-toastify";
import { SmallPopup } from './SmallPopup';
import 'react-toastify/dist/ReactToastify.css';
import { TopNav } from './TopNav';
import { KeyBoard } from './Keyboard';


type WordsData = {
    words: string[];
}

function Game() {
    const [goal, setGoalWord] = useState<string>("");
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [currentWord, setCurrentWord] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);
    const [validWords, setValidWords] = useState<WordsData>({ words: [] });
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [averageScore, setAverageScore] = useState<number>(0);
    const [width, setWidth] = useState<number>(1000);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    function showGameWonPopup() {
        setIsOpen(true);
    }

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    const handleFetchPosts = async (word: string, goalWord: string) => {
        if (goalWord === "" && word === "") {
            const response = await fetch("/api/word");
            const data = await response.json();
            setGoalWord(data.final);
            setCurrentWord(data.beg);
            localStorage.setItem('current-word', data.beg);
            localStorage.setItem('goal-word', data.final);
        }
        const nresponse = await fetch("/api/validwords");
        const ndata = await nresponse.json();
        setValidWords(ndata);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        handleWindowSizeChange();

        var now = new Date();
        var resetTime = localStorage.getItem('time-reset');
        // They've visited the website before
        if (resetTime !== null) {
            if (now > new Date(JSON.parse(resetTime))) {
                // Reset time
                localStorage.setItem('history', JSON.stringify([]));
                localStorage.setItem('current-word', "");
                localStorage.setItem('goal-word', "");
                localStorage.setItem('game-over', JSON.stringify(false));
                now.setUTCHours(28, 0, 0, 0);
                localStorage.setItem('time-reset', JSON.stringify(now));
                handleFetchPosts("", "");
            } else {
                // Don't reset yet
                const history = localStorage.getItem('history');
                if (history !== null) setHistory(JSON.parse(history));

                const word = localStorage.getItem('current-word') || "";
                if (word !== null) setCurrentWord(word);

                const goalWord = localStorage.getItem('goal-word') || "";
                if (goalWord !== null) setGoalWord(goalWord);

                const gameOver = localStorage.getItem('game-over');
                if (gameOver !== null) setGameOver(JSON.parse(gameOver));

                handleFetchPosts(word, goalWord);
            }
        } else {
            // They've never visited the website
            now.setUTCHours(28, 0, 0, 0);
            localStorage.setItem('time-reset', JSON.stringify(now));
            handleFetchPosts("", "");
        }

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function handleSubmitButton(e: React.SyntheticEvent) {
        e.preventDefault();
        inputCheck(currentGuess);
    }

    function inputCheck(guess: string) {
        // Input-checking
        // Length 5
        if (guess.length !== 5) {
            createToast('Try a 5-letter word!')
            return;
        }
        // Only 1 different letter
        var count = 0;
        for (var i = 0; i < 5; i++) {
            if (guess.charAt(i) !== currentWord.charAt(i))
                count++;
        }
        if (count !== 1) {
            createToast('Only change 1 character at a time!')
            return;
        }

        // Valid word
        const copyValidWords: string[] = validWords.words;
        if (!copyValidWords.includes(guess)) {
            createToast('Not a valid word!');
            return;
        }

        // Update history
        var newHistory: string[] = [...history]
        newHistory.push(guess);
        setHistory(newHistory);
        localStorage.setItem('history', JSON.stringify(newHistory));

        // Set current word
        setCurrentWord(guess);
        localStorage.setItem('current-word', guess);

        // Check for victory
        if (guess === goal) {
            // Victory!
            gameWin();
        }
    }

    function gameWin() {
        // Update total wins and average
        const savedWins = localStorage.getItem('number-wins');
        var wins = (savedWins === null) ? 1 : JSON.parse(savedWins) + 1;

        const savedAverage = localStorage.getItem('average');
        var average = (savedAverage === null) ? history.length : (JSON.parse(savedAverage) * (wins - 1)) + history.length;
        average = average / wins;
        setAverageScore(average);

        // Store values
        localStorage.setItem('number-wins', JSON.stringify(wins));
        localStorage.setItem('average', JSON.stringify(average));

        setGameOver(true);
        showGameWonPopup();
    }

    function createToast(text: string) {
        toast(text, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function updateRef(word: string) {
        setCurrentGuess(word);
    }

    function isAlpha(char: string) {
        // Imagine using real-life regular expressions
        return /^[A-Z]$/i.test(char);
    }

    function deleteKey() {
        var guess = currentGuess;
        if (guess.length === 0)
            return;
        guess = guess.substring(0, guess.length - 1);
        updateRef(guess);
    }

    function enterKey() {
        var guess = currentGuess;
        updateRef("");
        inputCheck(guess);
    }

    function charKey(key: string) {
        var guess = currentGuess;
        if (guess.length === 5)
            return;
        guess = guess + key.toLowerCase();
        updateRef(guess);
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Backspace") {
            deleteKey();
        } else if (e.key === "Enter") {
            enterKey();
        } else if (gameOver === true) {
            return;
        } else if (isAlpha(e.key)) {
            charKey(e.key);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        // Cleans up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [currentGuess]);

    return (
        <div className="game">
            <TopNav gameOver={gameOver} average={averageScore} moves={history.length} />
            <hr className="wide-bar" />
            <ToastContainer className="toast" />
            {gameOver && isOpen && <SmallPopup
                content={<>
                    <b className="popup-title">Nice win!</b>
                    <p className="popup-text">You got the word in {history.length} moves!</p>
                    <p className="popup-text">Your average is {averageScore} moves!</p>
                </>}
                handleClose={togglePopup} />}
            <CurrentWord current={currentWord} />
            <hr className="bar" />
            <Word word={currentGuess} />
            <img className="submit-button" src='/submit.png' alt='submit-button' onClick={handleSubmitButton} width={50} height={50} />
            <hr className="bar" />
            <GoalWord goal={goal} />
            <PreviousGuesses guesses={history} />
            {width <= 768 &&
            <KeyBoard onChar={charKey} onDelete={deleteKey} onEnter={enterKey} /> }
        </div>
    )
}

export { Game }