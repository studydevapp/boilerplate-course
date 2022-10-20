# StudyDev Boilerplate Course

## Add sql support to tasks
* npm i -s sqlite sqlite3
* init db in task:
```javascript
override async onStart() {
    this.db = await sqlite.open({filename: ':memory:', driver: sqlite3.Database})
    // add init db queries here
    return super.onStart();
}

override async onStop() {
    await this.db.close()
    await super.onStop();
}
```