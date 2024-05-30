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
    ReferenceInput,
    SelectInput,
} from "react-admin";

export const listToken = (props) => (
    <List{...props}>
        <Datagrid style={{ overflowX: "auto" }}>
            <TextField source="id" />
            <TextField source="created_at" />
            <TextField source="token" />
            <TextField source="user.fullname" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const editToken = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="token" multiline fullWidth />
            <ReferenceInput
                label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createToken = (props) => (
    <Create{...props}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="token" multiline fullWidth />
            <ReferenceInput
                label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
