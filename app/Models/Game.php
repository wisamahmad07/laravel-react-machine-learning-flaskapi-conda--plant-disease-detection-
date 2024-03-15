<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    public function platform()
    {
        return $this->hasMany(Platform::class);
    }
    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }
}
