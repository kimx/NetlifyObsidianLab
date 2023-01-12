class MyTask {
  getTasks(dv) {
    let tasks = dv.pages().where((f) => f.file.path.indexOf("60.Extra") == -1)
      .file.tasks;
    tasks = tasks.where(
      (t) => !t.completed && t.section.subpath.indexOf("Routine") == -1
    );
    tasks.sort((t) => t.due);
    return tasks;
  }
}
