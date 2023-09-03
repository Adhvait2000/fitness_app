import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const{bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        }
    ]

    return (
        <Stack gap="60px" sx={{flexDirection: {lg:'row'}, p:'20px', alignItms: 'center'}}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{gap: {lg:'35px', xs: '20px'}}}>
                <Typography variant="h3" textTransform="capitalize" color="#ff2625">
                    {name}
                </Typography>
                <Typography variant ="h6">
                    For a solid foundation of strength and to focus on your {' '}
                    <span style={{fontWeight: 'bold'}}>{target}</span>
                    {', '}
                    <span style={{fontWeight: 'bold'}}>{name}</span>
                    {' stands out as an exceptional exercise!'}
                </Typography>
                {extraDetail.map((item)=> (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background:"#fff2db", borderRadius: "50%", width: '100px', height: '100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px' }}/>
                        </Button>
                        <Typography textTransform="capitalize" variant="h5">
                            {item.name}
                        </Typography>

                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail