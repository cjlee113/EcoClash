import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

type Category = 'transportation' | 'food' | 'energy' | 'shopping' | 'waste';

interface Activity {
  category: Category;
  name: string;
  points: number;
  icon: string;
}

const activities: Record<Category, Activity[]> = {
  transportation: [
    { category: 'transportation', name: 'Took a flight', points: -150, icon: '✈️' },
    { category: 'transportation', name: 'Drove solo', points: -20, icon: '🚗' },
    { category: 'transportation', name: 'Carpooled', points: 10, icon: '🚙' },
    { category: 'transportation', name: 'Public transit', points: 15, icon: '🚌' },
    { category: 'transportation', name: 'Biked/Walked', points: 20, icon: '🚲' },
  ],
  food: [
    { category: 'food', name: 'Ate red meat', points: -25, icon: '🥩' },
    { category: 'food', name: 'Dairy-heavy meal', points: -15, icon: '🧀' },
    { category: 'food', name: 'Plant-based meal', points: 20, icon: '🥗' },
    { category: 'food', name: 'Local produce', points: 10, icon: '🥬' },
  ],
  energy: [
    { category: 'energy', name: 'Long hot shower', points: -5, icon: '🚿' },
    { category: 'energy', name: 'Warm laundry', points: -10, icon: '👕' },
    { category: 'energy', name: 'Unplugged devices', points: 5, icon: '🔌' },
    { category: 'energy', name: 'Short shower', points: 10, icon: '💧' },
  ],
  shopping: [
    { category: 'shopping', name: 'Fast fashion', points: -15, icon: '👕' },
    { category: 'shopping', name: 'Secondhand', points: 20, icon: '♻️' },
    { category: 'shopping', name: 'Reusable bag', points: 5, icon: '🛍️' },
  ],
  waste: [
    { category: 'waste', name: 'No recycling', points: -5, icon: '🗑️' },
    { category: 'waste', name: 'Excess trash', points: -10, icon: '🚮' },
    { category: 'waste', name: 'Recycled/Composted', points: 5, icon: '♻️' },
  ],
};

export default function LogScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('transportation');
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const categoryIcons: Record<Category, string> = {
    transportation: '🚗',
    food: '🍔',
    energy: '⚡',
    shopping: '🛍️',
    waste: '🗑️',
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView 
        horizontal 
        style={[styles.categoryList, { backgroundColor: colors.cardBackground }]} 
        showsHorizontalScrollIndicator={false}>
        {Object.keys(activities).map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category as Category)}
            style={[
              styles.categoryButton,
              { backgroundColor: colors.background },
              selectedCategory === category && { backgroundColor: colors.tint }
            ]}>
            <Text style={styles.categoryIcon}>{categoryIcons[category as Category]}</Text>
            <Text 
              style={[
                styles.categoryText,
                { color: selectedCategory === category ? '#fff' : colors.secondaryText }
              ]}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.activitiesList}>
        {activities[selectedCategory].map((activity, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.activityItem,
              { 
                backgroundColor: colors.cardBackground,
                borderColor: activity.points > 0 ? colors.tint : '#ff6b6b'
              },
            ]}>
            <View style={[styles.activityContent, { backgroundColor: colors.cardBackground }]}>
              <Text style={styles.activityIcon}>{activity.icon}</Text>
              <Text style={[styles.activityName, { color: colors.text }]}>{activity.name}</Text>
            </View>
            <Text
              style={[
                styles.points,
                { color: activity.points > 0 ? colors.tint : '#ff6b6b' },
              ]}>
              {activity.points > 0 ? '+' : ''}{activity.points}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryList: {
    flexGrow: 0,
    padding: 15,
  },
  categoryButton: {
    alignItems: 'center',
    padding: 10,
    marginRight: 15,
    borderRadius: 10,
    minWidth: 80,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
  },
  activitiesList: {
    flex: 1,
    padding: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  activityContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  activityName: {
    fontSize: 16,
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
