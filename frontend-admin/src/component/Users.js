import React from "react";
import {
    List,
    Datagrid,
    Edit,
    EditButton,
    TextInput,
    Create,
    TextField,
    SimpleForm,
    DeleteButton,
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
} from "react-admin";

export const listUser = (props) => (
    <List{...props}>
        <Datagrid style={{ overflowX: "auto" }}>
            <TextField source="id" />
            <TextField source="fullname" />
            <TextField source="email" />
            <TextField source="phone_number" />
            <TextField source="address" />
            <TextField source="password" />
            <TextField source="created_at" />
            <TextField source="updated_at" />
            <TextField source="deleted" />
            <TextField source="role.name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const editUser = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="email" multiline fullWidth />
            <NumberInput source="phone_number" />
            <TextInput source="address" multiline fullWidth />
            <TextInput source="password" multiline fullWidth />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Role"
                source="role.id"
                reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export const createUser = (props) => (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="address" multiline fullWidth />
            <DateInput source="created_at" />
            <NumberInput source="deleted" />
            <TextInput source="email" multiline fullWidth />
            <TextInput source="fullname" />
            <TextInput source="password" multiline fullWidth />
            <NumberInput source="phone_number" />
            <DateInput source="updated_at" />
            <ReferenceInput
                label="Role"
                source="role.id"
                reference="roles">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
