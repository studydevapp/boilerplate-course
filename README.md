# Tasks


## Breaking Changes

1. move text translation to metadata.json
2. move assets (including thumbnail.png) into /assets folder
3. Using esbuild instead of webpack

## WebTask
Type definition for express: `npm i --save-dev @types/express`
```typescript
import { WebTask } from "@studydev/sdk";

export default class Task extends WebTask {
    constructor() {
        super(webApp => {

        }, false)
    }
}
```

## RunCodeTask

```typescript
import { RunCodeTask } from "@studydev/sdk";

export default class Task extends RunCodeTask {
    constructor() {
        super('javascript', '123', 'console.log(123)')
    }
}
```

## RunFunctionTask

```typescript
import { RunFunctionTask } from "@studydev/sdk";

export default class Task extends RunFunctionTask {
    constructor() {
        super({
            javascript: 'function checkAge(age) {\n\n}',
            // list all languages you want to support...
        }, {
            name: 'checkAge',
            checks: [
                { args: [20], expect: false },
                { args: [18], expect: true },
                { args: [0], expect: false }
            ]
        })
    }
}
```

## TextTask

```typescript
import { TextOnlyTask } from "@studydev/sdk";

export default class Task extends TextOnlyTask {

}
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