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
    NumberInput,
    ReferenceInput,
    SelectInput,
} from "react-admin";


export const listOrders = (props) => (
    <List{...props}>
        <Datagrid style={{ overflowX: "auto" }}>
            <TextField source="id" />
            <TextField source="fullname" />
            <TextField source="email" />
            <TextField source="phone_number" />
            <TextField source="address" />
            <TextField source="note" />
            <TextField source="order_data" />
            <TextField source="status" />
            <TextField source="total_money" />
            <TextField source="user.fullname" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const editOrder = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="email" multiline fullWidth />
            <NumberInput source="phone_number" />
            <TextInput source="address" multiline fullWidth />
            <TextInput source="note" />
            <TextInput source="order_data" />
            <NumberInput source="status" />
            <NumberInput source="total_money" />
            <ReferenceInput
                label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createOrder = (props) => (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="email" multiline fullWidth />
            <NumberInput source="phone_number" />
            <TextInput source="address" multiline fullWidth />
            <TextInput source="note" />
            <TextInput source="order_data" />
            <NumberInput source="status" />
            <NumberInput source="total_money" />
            <ReferenceInput
                label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
