function multiplyValue(value:number,multiplier?:number):number{
  if (multiplier !== undefined) {
    const result:number=value * multiplier;
    if(value<0 && multiplier==0){
        return result+0;
    }
    return value * multiplier;
  }
  return value*2;
}




function processInput(input: string | number | boolean): string | number {
  if (typeof input === 'string') {
    return input.trim().toLocaleLowerCase();
  }

  if (typeof input === 'number') {
    return input * 10;
  }
  return input?"Active":"Inactive";
}



function formatCoordinate(coordinate:readonly [number,number,string]):string{
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays<T> (...arrays: T[][]): T[] {
  const combined: T[]=[];
  for (const array of arrays) {

    combined.push(...array);
  }
  return combined;
}



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents
  );
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout((): void => {
      resolve("Access Granted");
    }, 1000);
  });
}


console.log(await validateAgeAsync(20));

// Sample Output 1 (resolves after 1 second):
"Access Granted"

// Sample Input 2:
console.log(await validateAgeAsync(15));