const STUDENTS_LIST = [
  {
    id: 1,
    fullName: 'Lara Lerson',
    group: '310-19',
    abortedLessonsCount: {
      math: 2,
      physics: 1,
      english: 3,
      russian: 2,
      biology: 1
    }
  },
  {
    id: 2,
    fullName: 'Umarov Bahodir',
    group: '310-19',
    abortedLessonsCount: {
      math: 3,
      physics: 2,
      english: 1,
      russian: 0,
      biology: 2
    }
  },
  {
    id: 3,
    fullName: 'Samira Tulaganova',
    group: '310-19',
    abortedLessonsCount: {
      math: 0,
      physics: 2,
      english: 2,
      russian: 4,
      biology: 0
    }
  },
  {
    id: 4,
    fullName: 'Michael Jackson',
    group: '310-19',
    abortedLessonsCount: {
      math: 1,
      physics: 3,
      english: 0,
      russian: 0,
      biology: 2
    }
  },
  {
    id: 5,
    fullName: 'Alaxandr Henry',
    group: '310-19',
    abortedLessonsCount: {
      math: 3,
      physics: 2,
      english: 1,
      russian: 0,
      biology: 0
    }
  },
  {
    id: 6,
    fullName: 'Madina Utamurodova',
    group: '310-19',
    abortedLessonsCount: {
      math: 1,
      physics: 1,
      english: 0,
      russian: 0,
      biology: 2
    }
  },
  {
    id: 7,
    fullName: 'Sonny Sangha',
    group: '311-19',
    abortedLessonsCount: {
      math: 2,
      physics: 1,
      english: 0,
      russian: 1,
      biology: 3
    }
  },
  {
    id: 8,
    fullName: 'Khaby Lame',
    group: '311-19',
    abortedLessonsCount: {
      math: 0,
      physics: 0,
      english: 4,
      russian: 2,
      biology: 1
    }
  },
  {
    id: 9,
    fullName: 'Jenifer Kartes',
    group: '311-19',
    abortedLessonsCount: {
      math: 4,
      physics: 0,
      english: 0,
      russian: 2,
      biology: 2
    }
  },
  {
    id: 10,
    fullName: 'Nigina Alimova',
    group: '311-19',
    abortedLessonsCount: {
      math: 0,
      physics: 5,
      english: 3,
      russian: 0,
      biology: 0
    }
  },
  {
    id: 11,
    fullName: 'Sardor Jonibekov',
    group: '311-19',
    abortedLessonsCount: {
      math: 3,
      physics: 1,
      english: 0,
      russian: 0,
      biology: 2
    }
  },
  {
    id: 12,
    fullName: 'Tony Cross',
    group: '311-19',
    abortedLessonsCount: {
      math: 3,
      physics: 2,
      english: 0,
      russian: 0,
      biology: 2
    }
  },
  {
    id: 13,
    fullName: 'Bonny Berta',
    group: '312-19',
    abortedLessonsCount: {
      math: 0,
      physics: 1,
      english: 1,
      russian: 4,
      biology: 0
    }
  },
  {
    id: 14,
    fullName: 'Emma Khabiot',
    group: '312-19',
    abortedLessonsCount: {
      math: 3,
      physics: 3,
      english: 0,
      russian: 0,
      biology: 2
    }
  },
  {
    id: 15,
    fullName: 'Nodar Dumbadze',
    group: '312-19',
    abortedLessonsCount: {
      math: 2,
      physics: 0,
      english: 0,
      russian: 0,
      biology: 0
    }
  },
  {
    id: 16,
    fullName: 'Patris Evra',
    group: '312-19',
    abortedLessonsCount: {
      math: 0,
      physics: 0,
      english: 3,
      russian: 2,
      biology: 1
    }
  },
  {
    id: 17,
    fullName: 'Sameule Lukaku',
    group: '312-19',
    abortedLessonsCount: {
      math: 0,
      physics: 1,
      english: 0,
      russian: 2,
      biology: 4
    }
  },
  {
    id: 18,
    fullName: 'Lyuce Lavrov',
    group: '312-19',
    abortedLessonsCount: {
      math: 1,
      physics: 2,
      english: 0,
      russian: 0,
      biology: 0
    }
  },
];
const allSubjects = ['math', 'physics', 'english', 'russian', 'biology'];
const allGroups = ['310-19', '311-19', '312-19'];

const getLastId = (students) => {
  return students.length;
}

export function addStudent(student) {
  let studentInBase = STUDENTS_LIST.find(s => s.id === student.id) || {};

  studentInBase.fullName = student.fullName;
  studentInBase.group = student.group;
  studentInBase.abortedLessonsCount = student.abortedLessonsCount;

  if (!studentInBase.id) {
    studentInBase.id = getLastId(STUDENTS_LIST) + 1;
    STUDENTS_LIST.push(studentInBase);
  }

  return studentInBase;
}

export function getAllStudents() {
  return STUDENTS_LIST;
}

export function getAllGroups() {
  return allGroups;
}



export function getAllSubjects() {
  return allSubjects;
}

