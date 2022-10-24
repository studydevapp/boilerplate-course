# StudyDev Boilerplate Course

## Add sql support to tasks
* add feature: db_postgres
* example:
```javascript
override async onStart() {
    await this.course.features.db.execute(...)
    return super.onStart();
}
```