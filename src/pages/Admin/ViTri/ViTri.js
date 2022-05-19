import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachViTriAction } from '../../../redux/Actions/ViTriActon';

export default function ViTri() {
    const { mangViTri } = useSelector(state => state.viTriReducer)
    console.log(mangViTri);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachViTriAction())
    }, [])

    return (
        <div>ViTri</div>
    )
}
