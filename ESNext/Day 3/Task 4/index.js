student = {
    name: "Omar",
    age: "24",
    address: "Port Said",
    job: "SWE",
};

student[Symbol.iterator] = function () {
    let keys = Object.keys(this);
    let values = Object.values(this);
    let i = 0;
    return {
        next: () => {
            if (i < keys.length) {
                let res = {
                    value: `The object with property: ${keys[i]}, has value of ${values[i]}`,
                    done: false,
                };
                i++;
                return res;
            }

            return { value: undefined, done: true };
        },
    };
};

for (const property of student) {
    console.log(property);
}
