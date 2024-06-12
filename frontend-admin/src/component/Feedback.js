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
            <TextField source="fullname" />
            
            <TextField source="note" />
            <TextField source="phone_number" />
            <TextField source="status" />
            <TextField source="content" />
            <TextField source="update_at" />
            <TextField source="product.id" />
            
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
            <TextInput source="fullname" />
    
            <TextInput source="note" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <TextInput source="content" />
            <DateInput source="updated_at" />
            <ReferenceInput
                label="Product"
                source="product.id"
                reference="products">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createFeedback = (props) => (
    <Create{...props}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="email" />
            <TextInput source="fullname" />
      
            <TextInput source="note" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <TextInput source="content" />
            <DateInput source="updated_at" />
            <ReferenceInput
                label="Product"
                source="product.id"
                reference="products">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
