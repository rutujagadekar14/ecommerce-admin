import { useContext, useEffect } from 'react';
import { MyContext } from '../../Component/Layout';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { IoMdCloudUpload } from "react-icons/io";

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

function ProductUpload() {
    const context = useContext(MyContext);
    useEffect(() => {
        context.setShowHeaderSidebar(true);
        context.setIsOpenSidebar(true);
    })
    return (
        <>

            <div className='right-content'>
                <div className='container-fluid h-100'>
                    <div className='row h-100'>
                        <div className='col-12 '>
                            <div className='card shadow'>
                                <h5 className='heading'>product upload</h5>
                                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs_">
                                    <StyledBreadcrumb
                                        component="a"
                                        href="#"
                                        label="Home"
                                        icon={<HomeIcon fontSize="small" />}
                                    />
                                    <StyledBreadcrumb component="a" href="#" label="Products" />
                                    <StyledBreadcrumb
                                        style={{ 'color': '#0858f7' }}
                                        label="Product Upload"
                                    />
                                </Breadcrumbs>
                            </div>
                        </div>
                        <div >
                            <form>
                                <h4 className='mb-3 form-heading'>Basic Information</h4>
                                <div className='form-group'>
                                    <label>Title</label>
                                    <input type='text' placeholder='type here' />
                                </div>
                                <div className='form-group'>
                                    <label>Description</label>
                                    <textarea type='text' placeholder='Type here...' />
                                </div>
                                <div className='row' style={{ 'marginBottom': '10px' }}>
                                    <div className='col-md-6'>
                                        <div className='field-group label-col'>
                                            <label>category</label>
                                            <select>
                                                <option>Man</option>
                                                <option>Women</option>
                                                <option>Accessory</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='field-group label-col'>
                                            <label>Brand</label>
                                            <select>
                                                <option>Richman</option>
                                                <option>Lubana</option>
                                                <option>Ecstacy</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Regular Price</label>
                                        <input placeholder='type here' />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Discount Price</label>
                                        <input placeholder='type here' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Shipping fee</label>
                                        <input placeholder='type here' />
                                    </div>
                                    <div className='col-md-6'>
                                        <label>Tax Rate</label>
                                        <input placeholder='type here' />
                                    </div>
                                </div>
                                <label>Tags</label>
                                <textarea placeholder='Type here...' />
                                <Button type='submit'><IoMdCloudUpload />&nbsp; Publish and view</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductUpload;