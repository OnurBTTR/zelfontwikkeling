<?php

test('homepage returns redirect', function () {
    $this->get('/')->assertRedirect();
});
