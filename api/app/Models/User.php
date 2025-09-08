<?php

namespace App\Models;

use Webeau\Sofie\Models\User as BaseUser;

/**
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property string $email
 * @property string|null $email_verified_at
 * @property string $first_name
 * @property int $id
 * @property \Carbon\CarbonImmutable|null $last_login
 * @property string $last_name
 * @property string $locale
 * @property string|null $password
 * @property bool $published
 * @property string|null $remember_token
 * @property bool $two_factor_enabled
 * @property string|null $two_factor_secret
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property string $uuid
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Tenant> $accessible_tenants
 * @property-read \App\Models\Category|null $active_category
 * @property-read \Webeau\Sofie\Models\File|null $active_image
 * @property-read \Webeau\Sofie\Models\File|null $avatar
 * @property-read bool $can_be_destroyed
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read string $edit_url
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\FileAssociator> $files
 * @property-read int|null $files_count
 * @property-read \App\Models\Category|null $first_category
 * @property-read string|null $full_url
 * @property-read bool $has_avatar
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Webeau\Sofie\Models\File> $images
 * @property-read string $initials
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\Invite> $invites
 * @property-read int|null $invites_count
 * @property-read \Webeau\Sofie\Models\Revision|null $latestRevision
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\Revision> $latestRevisions
 * @property-read int|null $latest_revisions_count
 * @property-read int $locale_original_id
 * @property-read array<string, static> $locale_siblings
 * @property-read array<string, string> $locale_urls
 * @property-read string $meta_description
 * @property-read bool $meta_follow
 * @property-read bool $meta_index
 * @property-read string|null $meta_title
 * @property-read string $name
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \App\Models\Page|null $page
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\Revision> $revisionHistory
 * @property-read int|null $revision_history_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\Role> $roles
 * @property-read int|null $roles_count
 * @property-read \Webeau\Sofie\Models\Seo|null $seo
 * @property-read \App\Models\Tenant|null $tenant
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Tenant> $tenants
 * @property-read int|null $tenants_count
 * @property-read string|null $url
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> all($columns = ['*'])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static breadthFirst()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static depthFirst()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveChildren()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveFilesForField(string $fieldName)
 * @method static \Webeau\Sofie\Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static forLocale(?string $locale = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> get($columns = ['*'])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static getExpressionGrammar()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasChildren()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasFilesForField(string $fieldName)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasParent()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static indexFilter(\Webeau\Sofie\Models\Fields\ResourceField $field)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static isLeaf()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static isRoot()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static newModelQuery()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static newQuery()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static permission($permissions, $without = false)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static published()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static query()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static role($roles, $guard = null, $without = false)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static tree($maxDepth = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static treeOf(\Illuminate\Database\Eloquent\Model|callable $constraint, $maxDepth = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static whereDepth($operator, $value = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static whereUuid(string $uuid)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withGlobalScopes(array $scopes)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withRelationshipExpression($direction, callable $constraint, $initialDepth, $from = null, $maxDepth = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withoutMultiTenancy()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withoutPermission($permissions)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withoutRole($roles, $guard = null)
 * @method \Webeau\Sofie\Overwrites\Database\Eloquent\Relations\BelongsToMany<\App\Models\Tenant, static> tenants()
 * @mixin \Eloquent
 */
class User extends BaseUser {}
