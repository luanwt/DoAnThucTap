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
    Filter,
    SearchInput,
} from "react-admin";
const CategoriesFilter = props => (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
    </Filter>
  );
export const listCategory = (props) => (
    <List{...props} filters={<CategoriesFilter/>} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="isHome" />
            <TextField source="parentId"/>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const editCategory = (props) => (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="isHome" choices={[
                { id: 1, name: 'Hiển thị ở trang chủ', value: 1 },
                { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 },
            ]} defaultValue={0} />
            <TextInput source="parentId"/>
        </SimpleForm>
    </Edit>
);
export const createCategory = (props) => (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="isHome" choices={[
                { id: 1, name: 'Hiển thị ở trang chủ', value: 1 },
                { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 },
            ]} defaultValue={0} />
              <TextInput source="parentId"/>
        </SimpleForm>
    </Create>
);
