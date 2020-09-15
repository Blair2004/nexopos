<?php
namespace App\Models;

use App\Events\ProcurementAfterCreateEvent;
use App\Events\ProcurementAfterDeleteEvent;
use App\Events\ProcurementAfterUpdateEvent;
use App\Events\ProcurementBeforeCreateEvent;
use App\Events\ProcurementBeforeDeleteEvent;
use App\Events\ProcurementBeforeUpdateEvent;
use App\Models\Provider;
use Illuminate\Database\Eloquent\Model;

class Procurement extends Model
{
    protected $table    =   'nexopos_' . 'procurements';

    /**
     * this status mention when the procurement
     * has been received 
     * @param string
     */
    const DELIVERED     =   'delivered';

    /**
     * this status state when the procurement has
     * moved from the "draft" status to pending. Which
     * means it's ready to be processed or it's being proceesed.
     * @param string
     */
    const PENDING       =   'pending';

    /**
     * The procurement is in draft mode. Means it's not yet ready
     * to be processed or send to the provider
     * @param string
     */
    const DRAFT         =   'draft';

    /**
     * The procurement has affected the actual products stock.
     * Here the procurement has been delivered and integrated to the stock.
     * @param string
     */
    const STOCKED      =   'stocked';

    const PAYMENT_UNPAID    =   'unpaid';
    const PAYMENT_PAID      =   'paid';

    protected $dispatchesEvents     =   [
        'creating'      =>  ProcurementBeforeCreateEvent::class,
        'created'       =>  ProcurementAfterCreateEvent::class,
        'deleting'      =>  ProcurementBeforeDeleteEvent::class,
        'updating'      =>  ProcurementBeforeUpdateEvent::class,
        'updated'       =>  ProcurementAfterUpdateEvent::class,
        'deleted'       =>  ProcurementAfterDeleteEvent::class,
    ];

    public function products()
    {
        return $this->hasMany( ProcurementProduct::class, 'procurement_id' );
    }

    public function provider()
    {
        return $this->belongsTo( Provider::class );
    }
}