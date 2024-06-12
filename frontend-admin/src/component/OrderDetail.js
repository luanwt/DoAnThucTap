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


export const listOrderDetail = (props) => (
    <List{...props}>
        <Datagrid style={{ overflowX: "auto" }}>
            <TextField source="id" />
            <TextField source="num" />
            <TextField source="price" />
            <TextField source="total_money"/>
            <TextField source="order.id"/>
            <TextField source="product.id"/>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const editOrderDetail = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <NumberInput source="num" />
            <NumberInput source="price" />
            <NumberInput source="total_money" />


            <ReferenceInput
                label="Order"
                source="order.id"
                reference="orders">
            <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput
                label="Product"
                source="product.id"
                reference="products">
            <SelectInput optionText="id" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createOrderDetail = (props) => (
    <Create{...props}>
        <SimpleForm>
        <NumberInput source="num" />
            <NumberInput source="price" />
            <NumberInput source="total_money" />


            <ReferenceInput
                label="Order"
                source="order.id"
                reference="orders">
            <SelectInput optionText="id" />
            </ReferenceInput>

            <ReferenceInput
                label="Product"
                source="product.id"
                reference="products">
            <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
