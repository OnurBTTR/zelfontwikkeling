<?php

declare(strict_types=1);

namespace App\GraphQL\Queries\Tenants;

use App\Models\Tenant;
use GraphQL\Type\Definition\Type;
use Illuminate\Pagination\LengthAwarePaginator;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use Webeau\Sofie\GraphQL\Helpers\Paginate;

class TenantsQuery extends Query
{
    use Paginate;

    protected $attributes = [
        'name' => 'tenants',
    ];

    public function type(): Type
    {
        return GraphQL::paginate('Tenant');
    }

    public function args(): array
    {
        return [
            ...$this->paginationArgs(),
        ];
    }

    public function resolve($root, array $args): LengthAwarePaginator
    {
        $query = Tenant::query();

        return $this->paginate($query, $args);
    }
}
