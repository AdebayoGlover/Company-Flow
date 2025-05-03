# MongoDB Database Schema

## Collections Overview

### Users Collection
```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String, // Hashed
  department: {
    type: String,
    enum: ['hr', 'finance', 'operations', 'admin']
  },
  role: {
    type: String,
    enum: ['user', 'manager', 'admin']
  },
  lastLogin: Date,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Departments Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  head: {
    type: ObjectId,
    ref: 'Users'
  },
  employees: [{
    type: ObjectId,
    ref: 'Users'
  }],
  budget: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Employees Collection
```javascript
{
  _id: ObjectId,
  userId: {
    type: ObjectId,
    ref: 'Users'
  },
  departmentId: {
    type: ObjectId,
    ref: 'Departments'
  },
  position: String,
  salary: Number,
  startDate: Date,
  status: {
    type: String,
    enum: ['active', 'on_leave', 'terminated']
  },
  documents: [{
    name: String,
    url: String,
    type: String,
    uploadedAt: Date
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### Permissions Collection
```javascript
{
  _id: ObjectId,
  role: String,
  department: String,
  actions: [{
    resource: String,    // e.g., 'employees', 'departments'
    permissions: [String] // e.g., ['create', 'read', 'update', 'delete']
  }],
  createdAt: Date,
  updatedAt: Date
}
```

## Indexes
- Users: email (unique)
- Employees: userId, departmentId
- Departments: name (unique)
- Permissions: role, department

## Relationships
- User → Department (Many-to-One)
- Employee → User (One-to-One)
- Employee → Department (Many-to-One)
- Department → User (head) (Many-to-One)