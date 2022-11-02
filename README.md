# Tasks


## Breaking Changes

1. move text translation to metadata.json
2. move assets (including thumbnail.png) into /assets folder
3. Using esbuild instead of webpack

## RunCodeTask

```typescript
new RunCodeTask('javascript', 'expected-result', 'let age = 10;\n\nif(age > 17){\nconsole.log("Du darfst in den Club")\n}')
```

## RunFunctionTask

```typescript
new IfElseIntroduction('javascript', 'function addOne(age){\n\n}', [
    {functionCall: 'addOne(4)', expectedResult: 5},
    {functionCall: 'addOne(7)', expectedResult: 8},
    {functionCall: 'addOne(40)', expectedResult: 41},
    {functionCall: 'addOne(69)', expectedResult: 70}
])
```

## Add sql support to tasks

* add feature: db_postgres
* example:

```typescript
override async onStart(){
    await this.course.features.db.execute(...)
    return super.onStart();
}
```