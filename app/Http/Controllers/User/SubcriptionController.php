<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubcriptionPlans;
use App\Models\UserSubcription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class SubcriptionController extends Controller
{
    public function index(){
        return inertia('User/Dashboard/SubcriptionPlan/Index',[
            'subcriptionPlans' => SubcriptionPlans::all()
        ]);
    }

    public function userSubscribe(Request $request,SubcriptionPlans $subcriptionPlans){
        $data = [
            'user_id' => Auth::id(),
            'subcription_plan_id' => $subcriptionPlans->id,
            'price' => $subcriptionPlans->price,
            'expired_date' => Carbon::now()->addMonth($subcriptionPlans->active_period_in_months),
            'payment_status' => 'paid',
        ];
        
        $userSubscription = UserSubcription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
