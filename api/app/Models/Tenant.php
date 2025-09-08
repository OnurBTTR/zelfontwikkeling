<?php

namespace App\Models;

use Webeau\Sofie\Models\Tenant as BaseTenant;

/**
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property string $domain
 * @property int $id
 * @property string $locale
 * @property int|null $locale_original
 * @property \Illuminate\Support\Collection|null $locales
 * @property \Carbon\CarbonImmutable|null $publish_at
 * @property bool $published
 * @property string $title
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \App\Models\Category|null $active_category
 * @property-read \Webeau\Sofie\Models\File|null $active_image
 * @property-read bool $can_be_destroyed
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read string $edit_url
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\FileAssociator> $files
 * @property-read int|null $files_count
 * @property-read \App\Models\Category|null $first_category
 * @property-read string|null $full_url
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Webeau\Sofie\Models\File> $images
 * @property-read bool $is_accessible_for_user
 * @property-read bool $is_current
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
 * @property-read \App\Models\Page|null $page
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\Revision> $revisionHistory
 * @property-read int|null $revision_history_count
 * @property-read \Webeau\Sofie\Models\Seo|null $seo
 * @property-read \App\Models\Tenant|null $tenant
 * @property-read string|null $url
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> all($columns = ['*'])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static breadthFirst()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static depthFirst()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveChildren()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveFilesForField(string $fieldName)
 * @method static \Webeau\Sofie\Database\Factories\ResourceItemFactory<static> factory($count = null, $state = [])
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
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static published()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static query()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static tree($maxDepth = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static treeOf(\Illuminate\Database\Eloquent\Model|callable $constraint, $maxDepth = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static whereDepth($operator, $value = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withGlobalScopes(array $scopes)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withRelationshipExpression($direction, callable $constraint, $initialDepth, $from = null, $maxDepth = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static withoutMultiTenancy()
 * @method \Webeau\Sofie\Overwrites\Database\Eloquent\Relations\BelongsToMany<\App\Models\User, static> users()
 * @mixin \Eloquent
 */
class Tenant extends BaseTenant {}
