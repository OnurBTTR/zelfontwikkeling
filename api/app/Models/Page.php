<?php

namespace App\Models;

use Webeau\Sofie\Models\Page as BasePage;

/**
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property int $id
 * @property string $locale
 * @property int|null $locale_original
 * @property int|null $parent_id
 * @property int|null $position
 * @property bool $published
 * @property string $slug
 * @property int $template_id
 * @property string $template_type
 * @property int|null $tenant_id
 * @property string $title
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Webeau\Sofie\Models\File|null $active_image
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $ancestors The model's recursive parents.
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $ancestorsAndSelf The model's recursive parents and itself.
 * @property-read int|null $ancestors_and_self_count
 * @property-read int|null $ancestors_count
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $bloodline The model's ancestors, descendants and itself.
 * @property-read int|null $bloodline_count
 * @property-read bool $can_be_destroyed
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $children
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $childrenAndSelf The model's direct children and itself.
 * @property-read int|null $children_and_self_count
 * @property-read int|null $children_count
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $descendants The model's recursive children.
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $descendantsAndSelf The model's recursive children and itself.
 * @property-read int|null $descendants_and_self_count
 * @property-read int|null $descendants_count
 * @property-read bool $disallow_change_published
 * @property-read string $edit_url
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Webeau\Sofie\Models\FileAssociator> $files
 * @property-read int|null $files_count
 * @property-read string $full_url
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Webeau\Sofie\Models\File> $images
 * @property-read \Webeau\Sofie\Models\MetaResource|null $indexResource
 * @property-read bool $is_homepage
 * @property-read bool $is_notfoundpage
 * @property-read int $locale_original_id
 * @property-read array<string, static> $locale_siblings
 * @property-read array<string, string> $locale_urls
 * @property-read \Webeau\Sofie\Models\MetaResource $meta
 * @property-read string $meta_description
 * @property-read bool $meta_follow
 * @property-read bool $meta_index
 * @property-read string|null $meta_title
 * @property-read \App\Models\Page|null $parent
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $parentAndSelf The model's direct parent and itself.
 * @property-read int|null $parent_and_self_count
 * @property-read \App\Models\Page|null $rootAncestor The model's topmost parent.
 * @property-read \Webeau\Sofie\Models\Seo|null $seo
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $siblings The parent's other children.
 * @property-read \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> $siblingsAndSelf All the parent's children.
 * @property-read int|null $siblings_and_self_count
 * @property-read int|null $siblings_count
 * @property-read \Webeau\Sofie\Models\ResourceItem $template
 * @property-read \App\Models\Tenant|null $tenant
 * @property-read string $url
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> all($columns = ['*'])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static breadthFirst()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static depthFirst()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveChildren()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static doesntHaveFilesForField(string $fieldName)
 * @method static \Webeau\Sofie\Database\Factories\PageFactory factory($count = null, $state = [])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static forLocale(?string $locale = null)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Collection<int, static> get($columns = ['*'])
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static getExpressionGrammar()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasChildren()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasFiles()
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasFilesForField(string $fieldName)
 * @method static \Staudenmeir\LaravelAdjacencyList\Eloquent\Builder<static>|static hasParent()
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
 * @mixin \Eloquent
 */
class Page extends BasePage {}
