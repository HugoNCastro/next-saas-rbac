# NextJS SaaS + RBAC

## Features

### Authentication

- [ ] It should be able to authenticate using email & password
- [ ] It should be able to authenticate using Github account
- [ ] It should be able to recover passowrd using email
- [ ] It should be able to create an account (email, name and password)

### Organizations

- [ ] It should be able to create a new organization
- [ ] It should be able to to get organization to which the user belong
- [ ] It should be able to update an organization
- [ ] It should be able to shutdown an organization
- [ ] It should be able to tranfer organization ownership

### Invites

- [ ] It should be able to invite a new member (email, role)
- [ ] It should be able to accept an invite
- [ ] It should be able to revoke a pending invite

### Member

- [ ] It should be able to get organization members
- [ ] It should be able to to update a member role

### Projects

- [ ] It should be able to get projects within a organization
- [ ] It should be able to create a new project (name, url, description)
- [ ] It should be able to update a project (name, url, description)
- [ ] It should be able to delete a project

### Billing

- [ ] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role)

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table

|                          | Administrator | Member | Billing | Anonymous |
| ------------------------ | ------------- | ------ | ------- | --------- |
| Update organization      | ✅            | ❌     | ❌      | ❌        |
| Delete organization      | ✅            | ❌     | ❌      | ❌        |
| Invite a member          | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite         | ✅            | ❌     | ❌      | ❌        |
| List members             | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership       | ⚠️            | ❌     | ❌      | ❌        |
| Update member role       | ✅            | ❌     | ❌      | ❌        |
| Delete member            | ✅            | ⚠️     | ❌      | ❌        |
| List projects            | ✅            | ✅     | ✅      | ❌        |
| Create a new project     | ✅            | ✅     | ❌      | ❌        |
| Update a project         | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project         | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details      | ✅            | ❌     | ✅      | ❌        |
| Export billing details   | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions

#### Conditions

- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;


