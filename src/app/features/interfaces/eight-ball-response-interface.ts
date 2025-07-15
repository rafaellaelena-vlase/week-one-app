export interface Sentiment {
    score: number;
    comparative: number;
    calculation: any[];
    tokens: string[];
    words: string[];
    positive: string[];
    negative: string[];
}
export interface EightBallResponseInterface {
    reading: string;
    question: string;
    sentiment: Sentiment;
    lucky: boolean;
    locale: string
}
