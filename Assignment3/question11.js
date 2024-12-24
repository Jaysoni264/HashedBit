/*Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]*/
const students = [
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
    },
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
    },
];

function calculateAverages(students) {
    return students.map((student, index) => {
        const scores = Object.values(student);
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        return { [`student${index + 1}`]: { average: Math.floor(average) } };
    });
}

const result = calculateAverages(students);

result.forEach((student) => console.log(student));
