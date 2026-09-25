import { test, expect } from "vitest";

interface User {
    name: string;
    age: number;
};

function creatUser(name: string, age: number): User {
    return {name, age}
}

test('creats a user with the correct fieldes', () => {
    const user = creatUser('Alice', 30);

    expect(user).toEqual({name: 'Alice', age:30});
    expect(user.name).toBe('Alice');
});