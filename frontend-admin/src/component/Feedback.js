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

export const listFeedback = (props) => (
    <List{...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="create_at" />
            <TextField source="email" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="note" />
            <TextField source="phone_number" />
            <TextField source="status" />
            <TextField source="subject_name" />
            <TextField source="update_at" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const editFeedback = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="note" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <TextInput source="subject_name" />
            <DateInput source="updated_at" />
        </SimpleForm>
    </Edit>
);

export const createFeedback = (props) => (
    <Create{...props}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="note" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <TextInput source="subject_name" />
            <DateInput source="updated_at" />
        </SimpleForm>
    </Create>
);
