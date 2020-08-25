-- Create Groups table with constraints
CREATE TABLE groups(
  group_id SERIAL PRIMARY KEY,
  group_name VARCHAR NOT NULL
);

-- Create Tasks table with constraints
CREATE TABLE tasks(
  task_id SERIAL PRIMARY KEY,
  group_id INT REFERENCES groups(group_id) ON DELETE CASCADE,
  task_name VARCHAR NOT NULL,
  completed_at TIMESTAMP
);

-- Create tasks dependencies table.
CREATE TABLE tasks_dependencies (
  task_id INT REFERENCES tasks(task_id) ON DELETE CASCADE,
  dep_task_id INT REFERENCES tasks(task_id) ON DELETE CASCADE,
  CONSTRAINT tasks_dependencies_pk PRIMARY KEY (task_id, dep_task_id)
);
