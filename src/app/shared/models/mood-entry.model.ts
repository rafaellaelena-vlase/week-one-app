export type MoodType = 'happy' | 'sad' | 'energetic' | 'chill';

export interface MoodEntry {
    song: string;
    mood: MoodType;
    date: Date;
    url?: string;
    imageUrl?: string;
}