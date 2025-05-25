import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { IoMdCloudUpload } from "react-icons/io";
import React, { useState } from 'react';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

function CategoryAdd() {

    const [formFields, setFormFields] = useState({
        name: '',
        images: [],
        color: ''
    })

    const addCategory = (e) => {
        e.preventDefault();
        console.log(formFields);
    }

    const changeInput = (e) => {
        setFormFields(
            { ...formFields, [e.target.name]: e.target.value }
        )
    }

    return (
        <>
            <div className='categoryAdd'>
                <div className="right-content">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='card shadow'>
                                    <h5 className='heading'>Add category</h5>
                                    <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs_">
                                        <StyledBreadcrumb
                                            component="a"
                                            href="#"
                                            label="Home"
                                            icon={<HomeIcon fontSize="small" />}
                                        />
                                        <StyledBreadcrumb
                                            component="a"
                                            href="#"
                                            label="Category"
                                        />
                                        <StyledBreadcrumb
                                            style={{ 'color': 'blue' }}
                                            label="Add category"
                                        />
                                    </Breadcrumbs>
                                </div>
                            </div>
                            <div >
                                <form onSubmit={addCategory}>
                                    <div className='form-group'>
                                        <label>Category Name</label>
                                        <input type='text' name='name' onChange={changeInput} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Image Url</label>
                                        <input type='file' name='images' onChange={changeInput} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Color</label>
                                        <input type='text' name='color' onChange={changeInput} />
                                    </div>
                                    <Button type='submit'><IoMdCloudUpload />&nbsp; Publish and view</Button>                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryAdd;