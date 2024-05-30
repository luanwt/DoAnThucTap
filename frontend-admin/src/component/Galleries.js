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
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
} from "react-admin";

export const listGallery =(props)=>(
    <List{...props}>
    <Datagrid style={{overflowX:"auto"}}>
        <TextField source="id"/>
        <TextField source="thumbnail"/>
        <TextField source="product.name"/>
        <EditButton/>
        <DeleteButton/>
    </Datagrid>
    </List>
);

export const editGallery=(props)=>(
    <Edit{...props}>
    <SimpleForm>
        <TextInput source="thumbnail"/>
        <ReferenceInput
            label="Product"
            source="product.id"
            reference="products">
                <SelectInput optionText="name"/>
        </ReferenceInput>
    </SimpleForm>
    </Edit>
);

export const createGallery=(props)=>(
    <Create{...props}>
    <SimpleForm>
    <TextInput source="thumbnail"/>
    <ReferenceInput
        label="Product"
        source="product.id"
        reference="products">
            <SelectInput optionText="name"/>
    </ReferenceInput>
</SimpleForm>
    </Create>
);
