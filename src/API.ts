import { shuffleArray } from './utils';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}
export enum Category {
    MUSIC = 12,
    VIDEOGAME = 15,
    FLIM = 11,
    BOOK = 10,
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (category: Category, amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data?.results?.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
};