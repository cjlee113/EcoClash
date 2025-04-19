import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.tint }]}>
        <Text style={styles.title}>EcoClash</Text>
        <Text style={styles.subtitle}>Your Impact Today</Text>
      </View>
      
      <View style={[styles.scoreCard, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.scoreTitle, { color: colors.secondaryText }]}>Today's Score</Text>
        <Text style={[styles.scoreValue, { color: colors.tint }]}>+45</Text>
        <Text style={[styles.streakText, { color: colors.secondaryText }]}> 5 Day Streak!</Text>
      </View>

      <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activities</Text>
        <View style={[styles.activityItem, { borderBottomColor: colors.background }]}>
          <Text style={{ color: colors.text }}> Walked to work</Text>
          <Text style={[styles.points, { color: colors.tint }]}>+20</Text>
        </View>
        <View style={[styles.activityItem, { borderBottomColor: colors.background }]}>
          <Text style={{ color: colors.text }}> Plant-based lunch</Text>
          <Text style={[styles.points, { color: colors.tint }]}>+20</Text>
        </View>
        <View style={[styles.activityItem, { borderBottomColor: colors.background }]}>
          <Text style={{ color: colors.text }}> Recycled materials</Text>
          <Text style={[styles.points, { color: colors.tint }]}>+5</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Weekly Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={{ color: colors.text }}>Total Points: 285</Text>
          <Text style={{ color: colors.text }}>Rank: #3 among friends</Text>
          <Text style={{ color: colors.text }}>Activities Logged: 15</Text>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  scoreCard: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scoreTitle: {
    fontSize: 18,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  streakText: {
    fontSize: 16,
  },
  section: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  points: {
    fontWeight: 'bold',
  },
  summaryItem: {
    gap: 8,
  },
});
