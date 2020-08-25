-- Create Groups table with constraints
CREATE TABLE groups(
  id SERIAL PRIMARY KEY,
  group_name VARCHAR NOT NULL
);

-- Create Tasks table with constraints
CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  group_id INT,
  completes_task_id INT,
  task_name VARCHAR NOT NULL,
  completed_at TIMESTAMP,
  CONSTRAINT fk_group
    FOREIGN KEY (group_id)
      REFERENCES groups(id),
  CONSTRAINT fk_completes_task
    FOREIGN KEY (completes_task_id)
      REFERENCES tasks(id)
);
