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
    SearchInput,
    SelectInput,
    Filter,
    Pagination, usePagination
} from "react-admin";

const ProductFilter = props => (
    <Filter {...props} filterDefaultValues={{ q: '' }}>
        <SearchInput source="q" alwaysOn resettable />
    </Filter>
);

export const listProduct = props => {

    return (
        <List
            {...props}
            filters={<ProductFilter />}
            filterDefaultValues={{ q: '' }}

        >
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="title" />
                <TextField source="price" />
                <TextField source="discount" />
                <TextField source="brand" />
                <TextField source="quality" />
                <TextField source="image" />
                <TextField source="size" />
                <TextField source="description" />
                <TextField source="created_at" />
                <TextField source="updated_at" />
                <TextField source="deleted" />
                <TextField source="category.name" />
                <EditButton />
                <DeleteButton />
            </Datagrid>

        </List>
    )
};
export const editProduct = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="title" />
            <NumberInput source="price" />
            <NumberInput source="discount" />
            <TextInput source="brand" />
            <NumberInput source="quality" />
            <TextInput source="image" />
            <TextInput source="size" />
            <TextInput source="description" multiline fullWidth />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Category"
                source="category.id"
                reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createProduct = (props) => (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="title" />
            <NumberInput source="price" />
            <NumberInput source="discount" />
            <TextInput source="brand" />
            <NumberInput source="quality" />
            <TextInput source="image" />
            <TextInput source="size" />
            <TextInput source="description" multiline fullWidth />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Category"
                source="category.id"
                reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
