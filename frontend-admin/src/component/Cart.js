import React from "react";
import{
    List,
    Datagrid,
    Edit,
    EditButton,
    TextInput,
    Create,
    TextField,
    SimpleForm,
    DeleteButton,
    SelectInput,
    ReferenceInput
} from "react-admin";

export const listCart =(props)=>(
    <List{...props}>
    <Datagrid>
        <TextField source="id"/>
        <TextField source="user.fullname"/>
        <EditButton/>
        <DeleteButton/>
    </Datagrid>
    </List>
);
export const editCart=(props)=>(
    <Edit{...props}>
    <SimpleForm>
    <ReferenceInput
                label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
    </SimpleForm>
    </Edit>
);
export const createCart=(props)=>(
    <Create{...props}>
    <SimpleForm>
         <ReferenceInput
                label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
    </SimpleForm>
    </Create>
);
