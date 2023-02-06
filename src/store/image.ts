import {gql} from "@apollo/client";

export  const SET_IMAGE = gql`mutation AddImage($label: String!, $path: String!) {
    createImage(createImageInput:{label: $label, path: $path}) {
        _id,
        label,
    }
}`;

export const DELETE_IMAGE = gql`mutation DeleteImage($id: String!) {
    deleteImage(_id: $id){
        __typename
    }
}`;

export const GET_IMAGES = gql`
    query{
        getImages{_id, label, path }
    }
`;


