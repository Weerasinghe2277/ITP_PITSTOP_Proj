import { useAuth } from "../store/AuthContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const rolePermissions = {

    service_advisor: [
        { name: "Jobs Management", path: "/jobs", icon: "🔧", description: "Oversee and manage all service jobs", color: "#EF4444" },
        { name: "My Created Jobs", path: "/jobs/my-created", icon: "📋", description: "View jobs you have created", color: "#3B82F6" },
        { name: "Create Job", path: "/jobs/new/:bookingId", icon: "➕", description: "Create new service jobs", color: "#06B6D4" },
        { name: "Goods Requests", path: "/goods", icon: "📦", description: "Request parts and materials", color: "#F97316" },
        { name: "Leave Request", path: "/leave", icon: "🏖️", description: "Request time off work", color: "#F59E0B" },
    ],
