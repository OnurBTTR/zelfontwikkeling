<?php

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class VehicleType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Vehicle',
    ];

    public function fields(): array
    {
        return [
            'license_plate' => [
                'type' => Type::string(),
            ],

            'brand' => [
                'type' => Type::string(),
            ],

            'model' => [
                'type' => Type::string(),
            ],
        ];
    }
}
