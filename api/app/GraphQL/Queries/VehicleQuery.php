<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Http;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class VehicleQuery extends Query
{
    protected $attributes = [
        'name' => 'vehicle',
    ];

    public function type(): Type
    {
        return GraphQL::type('Vehicle');
    }

    public function args(): array
    {
        return [
            'license_plate' => [
                'type'  => GraphQL::type('String!'),
                'rules' => [
                    'required',
                    'min:1',
                    'max:20',
                    'regex:/^[A-Z0-9]+$/'
                ],
            ],
        ];
    }

    public function resolve($root, array $args): ?array
    {
        $response = Http::get("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken={$args['license_plate']}");

        if ($response->failed() || empty($response->json())) {
            return null;
        }

        $vehicle = $response->json()[0];

        return [
            'license_plate' => $vehicle['kenteken'] ?? null,
            'brand'         => $vehicle['merk'] ?? null,
            'model'         => $vehicle['handelsbenaming'] ?? null,
        ];
    }
}
