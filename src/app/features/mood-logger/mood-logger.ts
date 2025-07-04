import { Component, OnInit } from '@angular/core';
import { MoodEntry } from '../../shared/models/mood-entry.model';

@Component({
  selector: 'app-mood-logger',
  standalone: false,
  templateUrl: './mood-logger.html',
  styleUrl: './mood-logger.scss'
})
export class MoodLogger implements OnInit{
  moods: MoodEntry[] = [
    {
        song: 'Fade Into You',
        mood: 'chill',
        date: new Date('2025-01-01'),
        url: 'https://open.spotify.com/track/1LzNfuep1bnAUR9skqdHCK?si=c7913873d91144d8'
    },
    {
        song: 'Suddenly I See',
        mood: 'happy',
        date: new Date('2025-01-01'),
        url: 'https://open.spotify.com/track/5p9XWUdvbUzmPCukOmwoU3?si=089c323b6a3441d2'
    },
    {
        song: 'More Than You Know',
        mood: 'energetic',
        date: new Date('2025-01-01'),
        url: 'https://open.spotify.com/track/6h5PAsRni4IRlxWr6uDPTP?si=5a8044095d694484'
    },
    {
        song: 'Gilded Lily',
        mood: 'sad',
        date: new Date('2025-01-01'),
        url: 'https://open.spotify.com/track/3Z0qLOS0cqWKPHXkbTXmNF?si=68ea022938004440'
    },
  ]

  newMood: MoodEntry = { song: '', mood: 'happy', date: new Date(), url: '', imageUrl: '' };

  ngOnInit(): void {}

  addMood() {
    if (!this.newMood.song || !this.newMood.mood) return;

    const allowedMoods = ['happy', 'sad', 'energetic', 'chill'] as const;
    type MoodType = typeof allowedMoods[number];

    const mood = this.newMood.mood.toLowerCase().trim();
    if (!allowedMoods.includes(mood as MoodType)) return;

    this.moods.unshift({
      song: this.newMood.song,
      mood: this.newMood.mood,
      date: new Date(),
      url: this.newMood.url,
      imageUrl: this.newMood.imageUrl
    });

    this.newMood = { song: '', mood: 'happy', date: new Date(), url: '', imageUrl: '' };
  }

  getMoodClass(mood: string): string {
  switch (mood) {
    case 'happy':
      return 'happy-card';
    case 'sad':
      return 'sad-card';
    case 'energetic':
      return 'energetic-card';
    case 'chill':
      return 'chill-card';
    default:
      return '';
  }
}

  getMoodEmoji(mood: string): string {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'sad':
        return '😢';
      case 'energetic':
        return '⚡';
      case 'chill':
        return '🌙';
      default:
        return '🎵';
    }
  }
}
