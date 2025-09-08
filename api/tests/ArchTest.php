<?php

use Pest\Expectation;

arch('globals')
    ->expect(['dd', 'dump', 'var_dump', 'die', 'exit'])
    ->not->toBeUsed()
    ->ignoring(Expectation::class);

arch('commands')
    ->expect('App\Console\Commands')
    ->classes()
    ->toHaveAttribute(Symfony\Component\Console\Attribute\AsCommand::class);

arch('controllers')
    ->expect('App\Http\Controllers')
    ->classes()
    ->toHaveSuffix('Controller');

arch('jobs')
    ->expect('App\Jobs')
    ->classes()
    ->toImplement(Illuminate\Contracts\Queue\ShouldQueue::class)
    ->toHaveMethod('onConnection')
    ->toHaveSuffix('Job');

arch('models')
    ->expect('App\Models')
    ->classes()
    ->toExtend(Illuminate\Database\Eloquent\Model::class);

arch('observers')
    ->expect('App\Observers')
    ->classes()
    ->toHaveSuffix('Observer');

arch('should queue notifications')
    ->expect('App\Notifications')
    ->classes()
    ->toImplement(Illuminate\Contracts\Queue\ShouldQueue::class);

arch('gql enums')
    ->expect('App\GraphQL\Enums')
    ->classes()
    ->toHaveSuffix('Enum');

arch('gql fields')
    ->expect('App\GraphQL\Fields')
    ->classes()
    ->toHaveSuffix('Field');

arch('gql inputs')
    ->expect('App\GraphQL\Inputs')
    ->classes()
    ->toHaveSuffix('Input');

arch('gql mutations')
    ->expect('App\GraphQL\Mutations')
    ->classes()
    ->toHaveSuffix('Mutation');

arch('gql queries')
    ->expect('App\GraphQL\Queries')
    ->classes()
    ->toHaveSuffix('Query');

arch('gql types')
    ->expect('App\GraphQL\Types')
    ->classes()
    ->toHaveSuffix('Type');
