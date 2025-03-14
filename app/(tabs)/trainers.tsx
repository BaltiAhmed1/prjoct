import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trainers } from '@/data/trainers';
import Navbar from '@/components/Navbar';

export default function TrainersScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Navbar />
      
      <View style={styles.header}>
        <Text style={styles.title}>Nos formateurs</Text>
        <Text style={styles.subtitle}>Découvrez nos experts qui vous accompagnent dans votre apprentissage</Text>
      </View>

      <FlatList
        data={trainers}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trainerCard}>
            <Image source={{ uri: item.image }} style={styles.trainerImage} />
            <View style={styles.trainerInfo}>
              <Text style={styles.trainerName}>{item.name}</Text>
              <Text style={styles.trainerSpecialty}>{item.specialty}</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{item.coursesCount}</Text>
                  <Text style={styles.statLabel}>Cours</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{item.studentsCount}</Text>
                  <Text style={styles.statLabel}>Étudiants</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.trainersList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  trainersList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  trainerCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  trainerImage: {
    width: '100%',
    height: 150,
  },
  trainerInfo: {
    padding: 15,
  },
  trainerName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1e293b',
    marginBottom: 4,
  },
  trainerSpecialty: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#4361ee',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
});