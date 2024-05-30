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
    
    return(
    <List
        {...props}
        filters={<ProductFilter />}
        filterDefaultValues={{ q: '' }}
        
    >
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="brand" />
            <TextField source="created_at" />
            <TextField source="deleted" />
            <TextField source="description" />
            <TextField source="discount" />
            <TextField source="price" />
            <TextField source="quality" />
            <TextField source="size" />
            <TextField source="image" />
            <TextField source="title" />
            <TextField source="updated_at" />
            <TextField source="category.name" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
 
    </List>
)};
export const editProduct = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="brand" />
            <DateInput source="created_at" />
            <NumberInput source="deleted" />
            <TextInput source="description" multiline fullWidth />
            <NumberInput source="discount" />
            <NumberInput source="price" />
            <NumberInput source="quality" />
            <TextInput source="size" />
            <TextInput source="image" />
            <TextInput source="title" />
            <DateInput source="updated_at" />
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
            <TextInput source="brand" />
            <DateInput source="created_at" />
            <NumberInput source="deleted" />
            <TextInput source="description" multiline fullWidth />
            <NumberInput source="discount" />
            <NumberInput source="price" />
            <NumberInput source="quality" />
            <TextInput source="size" />
            <TextInput source="image" />
            <TextInput source="title" />
            <DateInput source="updated_at" />
            <ReferenceInput
                label="Category"
                source="category.id"
                reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
