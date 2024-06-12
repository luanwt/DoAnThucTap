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
    SelectInput,
    ReferenceInput
} from "react-admin";

export const listCartitem = (props) => (
    <List{...props}>
        <Datagrid>
            <TextField source="id" />

            <TextField source="quality" />
            <TextField source="image" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="productId" />
            <TextField source="cart.id" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
export const editCartitem = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="quality" />
            <TextInput source="image" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="productId" />
            <ReferenceInput
                label="Cart"
                source="cart.id"
                reference="carts">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createCartitem = (props) => (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="quality" />
            <TextInput source="image" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="productId" />
            <ReferenceInput
                label="Cart"
                source="cart.id"
                reference="carts">
                <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
