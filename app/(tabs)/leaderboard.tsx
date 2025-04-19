import React from 'react';
import { StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

interface User {
  id: number;
  name: string;
  points: number;
  streak: number;
  rank: number;
}

const dummyUsers: User[] = [
  { id: 1, name: 'Sarah Green', points: 450, streak: 7, rank: 1 },
  { id: 2, name: 'John Earth', points: 380, streak: 5, rank: 2 },
  { id: 3, name: 'Alex River', points: 320, streak: 3, rank: 3 },
  { id: 4, name: 'Emma Sky', points: 290, streak: 4, rank: 4 },
  { id: 5, name: 'Mike Ocean', points: 260, streak: 2, rank: 5 },
  { id: 6, name: 'Lisa Forest', points: 230, streak: 1, rank: 6 },
  { id: 7, name: 'Tom Mountain', points: 200, streak: 3, rank: 7 },
  { id: 8, name: 'Anna Lake', points: 180, streak: 2, rank: 8 },
];

export default function LeaderboardScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.tint }]}>
        <Text style={styles.title}>Weekly Leaderboard</Text>
        <Text style={styles.subtitle}>Top Eco Warriors</Text>
      </View>

      <ScrollView style={styles.leaderboard}>
        {dummyUsers.map((user) => (
          <View 
            key={user.id} 
            style={[
              styles.userCard,
              { backgroundColor: colors.cardBackground }
            ]}>
            <View style={styles.rankContainer}>
              <Text style={[
                styles.rank,
                { color: user.rank <= 3 ? colors.tint : colors.secondaryText }
              ]}>#{user.rank}</Text>
            </View>
            
            <View style={styles.userInfo}>
              <Text style={[styles.userName, { color: colors.text }]}>{user.name}</Text>
              <Text style={[styles.userStreak, { color: colors.secondaryText }]}> {user.streak} day streak</Text>
            </View>
            
            <View style={styles.pointsContainer}>
              <Text style={[styles.points, { color: colors.tint }]}>{user.points}</Text>
              <Text style={[styles.pointsLabel, { color: colors.secondaryText }]}>pts</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  leaderboard: {
    flex: 1,
    padding: 15,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rankContainer: {
    width: 40,
    alignItems: 'center',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStreak: {
    fontSize: 12,
    marginTop: 4,
  },
  pointsContainer: {
    alignItems: 'center',
    minWidth: 60,
  },
  points: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pointsLabel: {
    fontSize: 12,
  },
});