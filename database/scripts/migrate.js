const initialSchema = `
-- Create Users table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role_id INT,
  department_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Roles table
CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Departments table
CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add foreign key constraints
ALTER TABLE users
  ADD CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES roles(id),
  ADD CONSTRAINT fk_user_department FOREIGN KEY (department_id) REFERENCES departments(id);
`;

module.exports = {
  up: async (connection) => {
    return connection.query(initialSchema);
  },
  down: async (connection) => {
    return connection.query(`
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS roles;
      DROP TABLE IF EXISTS departments;
    `);
  },
};
